class AddPageUrlsToLeads < ActiveRecord::Migration[6.0]
  def change
    change_table :leads do |t|
      t.text :tracking_urls, null: false, array: true, default: []
    end
  end
end
