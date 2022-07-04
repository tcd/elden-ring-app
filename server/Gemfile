source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.1"

gem "rails", "~> 7.0.2", ">= 7.0.2.2" # Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"

gem "actionpack-action_caching", "~> 1.2" # Action caching for Action Pack (removed from core in Rails 4.0)
gem "activerecord_json_validator", "~> 2.1" # Like the name says
gem "blueprinter", "~> 0.25.3" # Object serializer
gem "lograge", "~> 0.11.2" # Tame Rails' multi-line logging into a single line per request
gem "pg", "~> 1.3" # Use postgresql as the database for Active Record
gem "puma", "~> 5.0" # Use the Puma web server [https://github.com/puma/puma]
# gem "rack-attack" # Rack middleware for blocking & throttling
gem "rack-cors", "~> 1.1" # Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rb_json5" # JSON5 parser for Ruby
# gem "jbuilder" # Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "redis", "~> 4.0" # Use Redis adapter to run Action Cable in production
# gem "kredis" # Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "bcrypt", "~> 3.1.7" # Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ] # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem "image_processing", "~> 1.2" # Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "rack-cors" # Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible

group :development, :test do
  gem "colorize", "~> 0.8.1" # Terminal colors
  gem "pry", "~> 0.14.1" # Better rails console
  gem "pry-rails", "~> 0.3.9" # Better rails console
end

group :development do
  gem "rails-erd", "~> 1.6" # Generate an entity-relationship diagram (ERD) from Rails models
#   gem "redcarpet", "~> 3.5" # A fast, safe and extensible Markdown to (X)HTML parser (for YARD docs)
#   gem "rubocop", "~> 1.25" # Linter
#   gem "solargraph", "~> 0.44.3" # Ruby language server
#   gem "tty-prompt", "~> 0.23.1" # Interactive command line prompt
#   gem "yard", "~> 0.9.27" # Code documentation
end

group :test do
  gem "simplecov", "~> 0.21.2" # Test coverage
end
