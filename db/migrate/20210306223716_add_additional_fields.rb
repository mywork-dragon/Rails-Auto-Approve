class AddAdditionalFields < ActiveRecord::Migration[6.0]
  def change
    add_column :leads, :additional, :jsonb, null: false, default: {}
  end
end
