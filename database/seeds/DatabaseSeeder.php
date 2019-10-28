<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersSeeder::class);
        $this->call(EventsSeeder::class);
        $this->call(SponsorsSeeder::class);
        $this->call(ArticlesSeeder::class);
    }
}
