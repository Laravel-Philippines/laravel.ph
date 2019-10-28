<?php

namespace App\Http\Requests\Publication;

use Carbon\Carbon;
use App\Models\Article;
use Illuminate\Foundation\Http\FormRequest;

class ArticleResourceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'         =>  'required',
            'body'          =>  'required',
            'published'     =>  'nullable|boolean',
            'publisher'     =>  'required_if:published,1|exists:users,id',
        ];
    }

    /**
     * Persist the request in the storage
     *
     * @param  App\Models\Article|null $article
     * @return App\Models\Article
     */
    public function persist(Article $article = null)
    {
        $article = $article ?? new Article;

        $article->title = $this->title;
        $article->body = $this->body;
        $article->published_at = $this->published ? Carbon::now() : null;
        $article->publisher_id = $this->publisher;

        $article->save();

        return $article;
    }
}
