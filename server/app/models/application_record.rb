# @abstract
class ApplicationRecord < ActiveRecord::Base

  include Lib::Helpers::Stripper

  primary_abstract_class()

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute id [r]
  #   @return [Integer]

  # @!attribute metadata [rw]
  #   Arbitrary JSON.
  #   @return [Hash]

  # @!attribute created_at [r]
  #   @return [Time]

  # @!attribute updated_at [r]
  #   @return [Time]

  # @!endgroup Attributes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [ActiveRecord::Relation]
  def select_without(*columns)
    if columns.is_a?(Array)
      select(column_names - columns.map(&:to_s))
    else
      select(column_names - [columns.to_s])
    end
  end

  # Override [human_attribute_name](https://api.rubyonrails.org/classes/ActiveModel/Translation.html#method-i-human_attribute_name)
  #
  # @param attribute [Symbol]
  # @param _options [Hash]
  # @return [String]
  def self.human_attribute_name(attribute, _options = {})
    return attribute.to_s.split(".").pop
  end

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return " " unless self.persisted?
    return self&.name || " "
  end

end
