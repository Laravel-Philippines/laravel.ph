<?php

namespace Tests\Feature\Publication;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ArticlesTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->signIn();
    }

    /** @test */
    public function can_get_articles_list()
    {
        $article1 = factory(Article::class)->create();
        $article2 = factory(Article::class)->create();
        $article3 = factory(Article::class)->create();

        $this->getJson(route('publication.articles.index'))
            ->assertJsonFragment(['title' => $article1->title, 'body' => $article1->body])
            ->assertJsonFragment(['title' => $article2->title, 'body' => $article2->body])
            ->assertJsonFragment(['title' => $article3->title, 'body' => $article3->body]);
    }


    /** @test */
    public function can_create_articles()
    {
        $this->postJson(
            route('publication.articles.store'),
            [
                'title'         =>  $title = 'Some title here..',
                'body'          =>  $body = 'Some body here...',
                'published'     =>  false,
            ]
        );

        $this->assertDatabaseHas('articles', [
            'title'             =>  $title,
            'body'              =>  $body,
            'published_at'      =>  null,
        ]);
    }

    /** @test */
    public function can_get_an_article_details()
    {
        $article = factory(Article::class)->create();

        $this->getJson(route('publication.articles.show', ['article' => $article->id]))
            ->assertJsonFragment(['title' => $article->title, 'body' => $article->body]);
    }

    /** @test */
    public function can_update_an_existing_art()
    {
        $article = factory(Article::class)->create();

        $this->patchJson(
            route('publication.articles.update', ['article' => $article->id]),
            [
                'title'     =>  $title = 'Updated title here..',
                'body'      =>  $body = 'Some new details..',
                'published' =>  true,
                'publisher' =>  Auth::id(),
            ]
        );

        $this->assertDatabaseHas('articles', [
            'id'            =>  $article->id,
            'title'         =>  $title,
            'body'          =>  $body,
            'published_at'  =>  Carbon::now()->format('Y-m-d H:i:s'),
            'publisher_id'  =>  Auth::id(),
        ]);
    }
}
