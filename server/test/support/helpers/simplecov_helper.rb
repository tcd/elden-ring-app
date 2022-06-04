require "simplecov"

SimpleCov.formatters = [
  SimpleCov::Formatter::HTMLFormatter,
]

SimpleCov.start do

  add_filter("/autotest/")
  add_filter("/bin/")
  add_filter("/config/")
  add_filter("/db/")
  add_filter("/features/")
  add_filter("./lib/")
  add_filter("/storage/")
  add_filter("/spec/")
  add_filter("/test/")
  add_filter("/tmp/")
  add_filter("/vendor/")
  add_filter("app/admin")
  add_filter("app/lib")

  add_group("Controllers", "app/controllers")
  add_group("Jobs", ["app/jobs", "app/workers"])
  # add_group("Lib", "app/lib")
  add_group("Mailers", "app/mailers")
  add_group("Models", "app/models")
  # add_group("Services", "app/services")
  add_group("Serializers", "app/serializers")

  track_files("app/**/*.rb")

end
