class ChangeLeadVehicleFields < ActiveRecord::Migration[6.0]
  def up
    change_column :leads, :vehicle_make_id, :integer, null: true
    change_column :leads, :vehicle_make_name, :string, null: true
    change_column :leads, :vehicle_model_id, :integer, null: true
    change_column :leads, :vehicle_model_name, :string, null: true
  end

  def down
    change_column :leads, :vehicle_make_id, :integer, null: false
    change_column :leads, :vehicle_make_name, :string, null: false
    change_column :leads, :vehicle_model_id, :integer, null: false
    change_column :leads, :vehicle_model_name, :string, null: false
  end
end
