Migration

php artisan migrate:fresh
// will drop all tables and run migration

otherwise you have to run
php artisan migrate:rollback
php artisan migrate

Generate controller, model and migration with single command
php artisan make:model ModelName -mc