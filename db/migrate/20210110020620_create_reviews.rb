class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :review_site, null: false, foreign_key: true, index: false
      t.string :name, null: false
      t.string :location, null: false
      t.text :content, null: false
      t.string :url, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    
    add_index :reviews, :review_site_id
  end
end
