class MakeCrmIdString < ActiveRecord::Migration[6.0]
  def change
    change_column :leads, :crm_id, :string
    add_index :leads, :crm_id
  end
end
