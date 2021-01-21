class CreateLeads < ActiveRecord::Migration[6.0]
  def change
    create_table :leads do |t|
      t.references :landing, null: false, foreign_key: true, index: false
      t.references :vehicle, null: false, foreign_key: true, index: false

      t.string :source

      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email
      t.string :phone
      t.string :last_4_ssn
      t.date :date_of_birth
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state_code
      t.string :zipcode
      t.integer :estimated_credit_score
      
      t.string :job_name
      t.string :job_title
      t.integer :job_wages_cents
      t.integer :job_years
      t.integer :job_months

      t.integer :vehicle_year
      t.integer :vehicle_mileage
      t.string :vehicle_type
      t.string :vehicle_vin
      t.integer :desired_term

      t.string :lien_name
      t.integer :lien_payoff_cents
      t.integer :lien_payment_cents
      t.float :lien_rate

      t.integer :state, null: false, default: 0
      t.integer :crm_id
      t.integer :synced_at
      t.timestamps
    end

    add_index :leads, :state
    add_index :leads, [:vehicle_id, :state]
    add_index :leads, [:landing_id, :state]
    add_index :leads, :synced_at
  end
end
