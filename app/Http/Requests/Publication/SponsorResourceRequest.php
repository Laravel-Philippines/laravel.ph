<?php

namespace App\Http\Requests\Publication;

use App\Models\Sponsor;
use Illuminate\Foundation\Http\FormRequest;

class SponsorResourceRequest extends FormRequest
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
            'name'          =>  'required',
            'description'   =>  'nullable',
            'website'       =>  'nullable',
        ];
    }

    /**
     * Persist the request to the storage.
     *
     * @param  App\Models\Sponsor $sponsor
     * @return App\Models\Sponsor
     */
    public function persist(Sponsor $sponsor = null)
    {
        $sponsor = $sponsor ?? new Sponsor;

        $sponsor->name = $this->name;
        $sponsor->description = $this->description;
        $sponsor->website = $this->website;

        $sponsor->save();

        return $sponsor;
    }
}
