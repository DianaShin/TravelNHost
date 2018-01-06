class AddHeroUrlToDestinations < ActiveRecord::Migration[5.1]
  def change
    add_column :destinations, :hero_url, :string
  end
end
