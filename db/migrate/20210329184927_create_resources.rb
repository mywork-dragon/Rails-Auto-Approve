class CreateResources < ActiveRecord::Migration[6.0]
  def change
    create_table :resources do |t|
      t.references :user, null: false, foreign_key: true, index: false
      t.references :resource_category, null: false, foreign_key: true, index: false
      t.string :title, null: false
      t.string :subTitle, null: false
      t.string :cover
      t.text :content
      t.string :slug, null: false
      t.integer :state, null: false, default: 0
      t.timestamps
    end
    add_index :resources, :state
    add_index :resources, :user_id
    add_index :resources, :resource_category_id
    add_index :resources, :slug, unique: true
  end
end
