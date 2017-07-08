<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('description');
            $table->longText('plain_description');
            $table->longText('simple_html_description');
            $table->longText('hosts');
            $table->boolean('featured');
            $table->time('time');
            $table->time('updated');
            $table->integer('utc_offset');
            $table->integer('meetup_id');
            $table->longText('venue');
            $table->string('name');
            $table->integer('rsvp_limit')->default(100);
            $table->enum('status', [
                'cancelled', 'draft', 'past', 'proposed', 'suggested', 'upcoming'
            ])->default('upcoming');
            $table->string('link');
            $table->string('short_link');
            $table->string('how_to_find_us')->nullable();
            $table->longText('photo_album');

            $table->longText('fulldata');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
