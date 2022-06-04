ENV["RAILS_ENV"] ||= "test"
require_relative "./support/helpers/simplecov_helper"
require_relative "../config/environment"
require "rails/test_help"

# @abstract
class ActiveSupport::TestCase

  # Run tests in parallel with specified workers.
  parallelize(workers: 1)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  # Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html
  #
  # https://stackoverflow.com/questions/28046415/loading-rails-fixtures-in-a-specific-order-when-testing
  fixtures(:all)

  # Return the path to a file in `test/support/file_fixtures/`.
  #
  # @param fixture_name [String]
  # @return [Pathname]
  def file_fixture(fixture_name)
    file_fixture_path = Rails.root.join("test", "support", "file_fixtures")
    path = Pathname.new(File.join(file_fixture_path, fixture_name))
    if path.exist?()
      return path
    else
      msg = sprintf("the directory '%s' does not contain a file named '%s'", file_fixture_path, fixture_name)
      raise ArgumentError, msg
    end
  end

  # Read a JSON file in `test/support/file_fixtures/` and return the parsed hash.
  #
  # @param path [String]
  # @param symbolize [Boolean] Whether or not to symbolize keys.
  # @return [Hash]
  def json_file_fixture(path, symbolize: false)
    return JSON.parse(file_fixture(path).read, symbolize_names: symbolize)
  end

  # Return the path to a file in `test/support/file_fixtures/`.
  #
  # @param fixture_name [String]
  # @return [Pathname]
  def self.file_fixture(fixture_name)
    file_fixture_path = Rails.root.join("test", "support", "file_fixtures")
    path = Pathname.new(File.join(file_fixture_path, fixture_name))
    if path.exist?()
      return path
    else
      msg = sprintf("the directory '%s' does not contain a file named '%s'", file_fixture_path, fixture_name)
      raise ArgumentError, msg
    end
  end

  # Read a JSON file in `test/support/file_fixtures/` and return the parsed hash.
  #
  # @param path [String]
  # @param symbolize [Boolean] Whether or not to symbolize keys.
  # @return [Hash]
  def self.json_file_fixture(path, symbolize: false)
    return JSON.parse(file_fixture(path).read, symbolize_names: symbolize)
  end

  # Helper method for parsing controller responses.
  #
  # @return [Array, Hash]
  def json_response_body()
    @json_response_body ||= JSON.parse(response.body)
  end

  # @raise [ArgumentError] unless `want` is Numeric
  # @raise [Lib::Errors::TestError] unless both `@initial_count` and `@model` are defined
  # @param want [Numeric] Expected
  # @param message [String]
  def assert_count_created(want, message = nil)
    raise ArgumentError unless want.is_a?(Numeric)
    raise Lib::Errors::TestError, "'@initial_count` must be defined to use `assert_count_created`" if @initial_count.nil?()
    raise Lib::Errors::TestError, "'@model` must be defined to use `assert_count_created`" if @model.nil?()
    assert_equal(
      (@initial_count + want),
      @model.count(),
      message,
    )
  end

end
