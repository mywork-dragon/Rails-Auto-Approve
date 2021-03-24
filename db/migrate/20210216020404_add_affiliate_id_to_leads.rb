class AddAffiliateIdToLeads < ActiveRecord::Migration[6.0]
  def change
    add_column :leads, :affiliate_id, :string
  end
end
