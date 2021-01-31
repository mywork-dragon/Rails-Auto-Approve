class AddSourceToLanding < ActiveRecord::Migration[6.0]
  def change
    change_table :landings do |t|
      t.string :source, null: false, default: ''
    end

    add_index :landings, :source
  end
end
