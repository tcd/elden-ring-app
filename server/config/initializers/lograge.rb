# require "lograge/sql/extension"

Rails.application.configure do
  config.lograge.enabled = true

  config.lograge.ignore_actions = [
    "HealthcheckController#index",
    "ActiveStorage::DiskController#show",
    "ActiveStorage::RepresentationsController#show",
    "ActiveStorage::Representations::RedirectController#show",
  ]
  config.lograge.custom_options = lambda do |event|
    {
      time: Time.zone.now(),
      # level: event.payload[:level],
      # exception: event.payload[:exception], # ["ExceptionClass", "the message"]
      # exception_object: event.payload[:exception_object], # the exception instance
    }
  end

  # # Instead of extracting event as Strings, extract as Hash.
  # # You can also extract additional fields to add to the formatter
  # config.lograge_sql.extract_event = proc do |event|
  #   {
  #     name: event.payload[:name],
  #     duration: event.duration.to_f.round(2),
  #     sql: event.payload[:sql],
  #   }.to_json()
  # end
  # # Format the array of extracted events
  # config.lograge_sql.formatter = proc do |sql_queries|
  #   sql_queries
  # end

end
