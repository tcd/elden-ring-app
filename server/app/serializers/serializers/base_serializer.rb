module Serializers
  class BaseSerializer < Blueprinter::Base

    identifier(:id)

    # fields(:created_at, :updated_at)

    fields(
      # :display_name,
      # :metadata,
    )

  end
end
