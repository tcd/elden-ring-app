# Common tests for all Model classes.
#
# Subclasses should override/implement the following methods:
#
# - {#set_model}
#
# @abstract
class ModelTest < ActiveSupport::TestCase

  # @!attribute @initial_count
  #   @return [Integer]

  # @!attribute @skips
  #   @return [Integer]

  # @return [void]
  def base_setup()
    @model = set_model()
    @skips = set_skips()
    @initial_count = @model.count()
  end

  # @return [ApplicationRecord]
  def set_model()
    raise NotImplementedError
  end

  # @return [Array<String>]
  def set_skips()
    return []
  end

  BaseModelTests = lambda do

    test "that there are fixtures" do
      skip() if @skips.include?("that there are fixtures")
      assert(@initial_count > 0)
    end

    # test ".icon_class" do
    #   refute_nil(@model.icon_class)
    # end

    test "#display_name" do
      skip() if @skips.include?("#display_name")
      entity = @model.first()
      refute_nil(entity.display_name())
    end

  end

end
