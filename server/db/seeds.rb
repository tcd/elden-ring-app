entity = ENV.fetch("entity", :none).to_sym()

if entity == :none
  Lib::Seed.all()
else
  begin
    Lib::Seed.send(entity)
  rescue StandardError => e
    binding.pry()
    puts(e)
  end
end
