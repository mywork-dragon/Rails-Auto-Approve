class CreateCategoryPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :category_posts do |t|
      t.references :post, null: false, foreign_key: true, index: false
      t.references :category, null: false, foreign_key: true, index: false
      t.timestamps
    end

    add_index :category_posts, [:post_id, :category_id], unique: true
    add_index :category_posts, :category_id
  end
end
