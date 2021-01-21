class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.string :teaser, null: false
      t.string :cover
      t.integer :state, null: false, default: 0
      t.string :slug, null: false
      t.timestamps
    end

    add_index :categories, :state
    add_index :categories, :slug, unique: true
  end
end
