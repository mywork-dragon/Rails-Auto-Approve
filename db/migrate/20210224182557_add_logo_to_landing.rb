class AddLogoToLanding < ActiveRecord::Migration[6.0]
  def change
    add_column :landings, :logo, :string
  end
end
