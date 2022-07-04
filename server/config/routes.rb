# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root(to: "index#index")
  get("/", to: "index#index")

  namespace(:api, defaults: { format: :json }) do
    get("/", to: "index#index")

    get("/kitchen-sink", to: "kitchen_sink#index")

    get("/armor",            to: "armor#index")
    get("/spells",           to: "spells#index")
    get("/talismans",        to: "talismans#index")
    get("/weapons",          to: "weapons#index")
    get("/weapon-skills",    to: "weapon_skills#index")
    get("/weapon-stats",     to: "weapon_stats#index")
    get("/starting-classes", to: "starting_classes#index")
  end

  match("*route_not_found.:format", to: "application#not_found", via: :all)
  match("*route_not_found",         to: "application#not_found", via: :all)
end
