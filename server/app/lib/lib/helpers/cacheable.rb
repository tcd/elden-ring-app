module Lib
  module Helpers
    module Cacheable
      def self.prepended(klass)
        klass.class_eval do
          include ActionController::Caching
          include ActionController::Caching::Actions

          attr_accessor :action_has_layout

          def self.cache_store
            @cache_store ||= begin
              store = Rails.application.config.cache_store
              ActiveSupport::Cache.lookup_store(store)
            end
          end
        end
      end
      def cache_store()
        @cache_store ||= begin
          store = Rails.application.config.cache_store
          ActiveSupport::Cache.lookup_store(store)
        end
      end
    end
  end
end
