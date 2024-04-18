# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.0'
gem 'cssbundling-rails'
gem 'devise', '~> 4.9'
gem 'jbuilder'
gem 'jsbundling-rails'
gem 'pg', '~> 1.1'
gem 'puma', '~> 6.4'
gem 'rails', '~> 7.1.3'
gem 'redis', '~> 5.2'
gem 'sidekiq', '~> 7.2'
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'turbo-rails'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'bootsnap', require: false
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv'
end

group :development do
  gem 'foreman', '~> 0.88.1'
  gem 'rack-mini-profiler'
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
