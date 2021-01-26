class AddAdditionalLeadFields < ActiveRecord::Migration[6.0]
  def change
    change_table :leads do |t|
      t.remove :vehicle_id
      t.integer :vehicle_make_id, null: false
      t.string :vehicle_make_name, null: false
      t.integer :vehicle_model_id, null: false
      t.string :vehicle_model_name, null: false
    end
  end
end
