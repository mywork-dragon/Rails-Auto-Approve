class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true, index: false
      t.string :title, null: false
      t.string :cover
      t.string :teaser
      t.text :content
      t.datetime :publish_at
      t.string :slug, null: false
      t.timestamps
    end

    add_index :posts, :user_id
    add_index :posts, [:publish_at, :slug]
    add_index :posts, :slug, unique: true
  end
end
