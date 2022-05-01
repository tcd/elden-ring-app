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
          print("\r#{@title}: #{@counter}/#{@total} - #{message}")
        else
          print("\r#{@title}: #{@counter}/#{@total}")
        end
      else
        if !message.blank?
          print("\r#{@counter}/#{@total} - #{message}")
        else
          print("\r#{@counter}/#{@total}")
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

  end
end
