module Lib
  # Output "done/total" for an operation to stdout.
  class ProgressBar

    # @param total [Numeric] Total number of items to process
    # @param counter [Numeric] Number to start progress from
    # @param title [String] Title to prepend to the progress bar
    def initialize(total, counter: 1, title: nil)
      @total   = total
      @counter = counter
      @title   = title
      @disabled = (ENV["RAILS_PROGRESS_BARS"] != "true")
    end

    # Increment progress.
    # Prints a newline when `@total` is reached.
    #
    # @return [void]
    def increment(message = nil)
      # return if @disabled
      return if @counter > @total
      if @title
        if !message.blank?
          print("\r#{@title}: #{counter_with_commas}/#{total_with_commas} - #{message}")
        else
          print("\r#{@title}: #{counter_with_commas}/#{total_with_commas}")
        end
      else
        if !message.blank?
          print("\r#{counter_with_commas}/#{total_with_commas} - #{message}")
        else
          print("\r#{counter_with_commas}/#{total_with_commas}")
        end
      end
      newline() if @counter == @total
      @counter += 1
    end

    # Print a single newline.
    #
    # @return [void]
    def newline()
      print("\n")
    end

    # @return [String]
    def total_with_commas()
      return @total&.to_fs(:delimited)
    end

    # @return [String]
    def counter_with_commas()
      return @counter&.to_fs(:delimited)
    end

  end
end
