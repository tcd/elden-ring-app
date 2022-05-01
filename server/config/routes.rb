# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root(to: "index#index")
  get("/", to: "index#index")

  namespace(:api, defaults: { format: :json }) do
    get("/kitchen-sink", to: "kitchen_sink#index")

    get("/armor",         to: "armor#index")
    get("/spells",        to: "spells#index")
    get("/talismans",     to: "talismans#index")
    get("/weapons",       to: "weapons#index")
    get("/weapon-skills", to: "weapon_skills#index")
  end
end