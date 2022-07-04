module EldenRing
  # Elden Ring Rails application
  class Application < Rails::Application

    # @return [String]
    VERSION = "0.1.0".freeze()

    # @return [String]
    def version()
      return VERSION
    end

  end
end
