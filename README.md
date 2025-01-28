## About the Template

A Laravel application template focusing on 100% test & type coverage, and maximum static analysis.

It is built on top of [Laravel Breeze](https://github.com/laravel/breeze) and includes the following tools pre-configured with sensible (strict) defaults:

- [RectorPHP](https://github.com/rectorphp/rector) for automatic refactoring
- [Larastan](https://github.com/nunomaduro/larastan) for static analysis
- [Pint](https://github.com/laravel/pint) for code formatting
- [PestPHP](https://pestphp.com) for testing
    - [Type Coverage Plugin](https://github.com/pestphp/pest-plugin-type-coverage) for type-safe testing
    - [Test Coverage](https://pestphp.com/docs/test-coverage)
- [Prettier](https://prettier.io) for Typescript file formatting

It also includes [shadcn/ui](https://github.com/shadcn/ui) pre-configured.

## Getting Started

```bash
cp .env.example .env
```

Update the `.env` file with your `APP_NAME`, `APP_URL`, local database credentials.
Feel free to change any other variables to fit your local environment needs.

```bash
composer install
npm install && npm run build
touch database/database.sqlite
php artisan key:generate
php artisan migrate
```

At this point, your application is ready to start developing.

You can run `composer test`, which should yield a passing test suite, with 100% test and type coverage.

## Tools

Tools are exposed as [Composer](https://getcomposer.org/) scripts.

```bash
composer test                 # @test:refactor && @test:lint
                              # && @test:types && @test:stan && @test:unit

# `composer test` will run the tools in the following order:
composer test:refactor        # rector --dry-run
composer test:lint            # pint --test && prettier --check resources/
composer test:types           # tsc && pest --type-coverage --colors=always --memory-limit=512M --min=100
composer test:stan            # phpstan analyse --ansi --memory-limit=512M
composer test:unit            # pest --colors=always --coverage --parallel --min=100

# Tools are also individually exposed as separate scripts:
composer format               # pint && prettier --write resources/
composer format:php <file>    # pint <file>
composer format:js <file>     # prettier --write <file> --cache
composer refactor             # rector
```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
