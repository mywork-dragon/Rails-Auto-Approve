class AddTokenToLeads < ActiveRecord::Migration[6.0]
  def change
    change_table :leads do |t|
      t.string :token
    end

    add_index :leads, :token, unique: true
  end
end
