class RemoveLocationFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :location, :string
  end
end
