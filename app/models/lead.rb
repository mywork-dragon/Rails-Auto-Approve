class Lead < ApplicationRecord
  DESIRED_TERMS = [38, 48, 60, 72, 84].freeze

  belongs_to :landing

  monetize :lien_payment_cents
  monetize :lien_payoff_cents
  monetize :job_wages_cents

  validates :first_name, :last_name, length: { maximum: 50 }, presence: true
  validates :email, format: { with: Devise.email_regexp }, length: { maximum: 255 }
  validates :phone, phone: { possible: true }
  validates :date_of_birth, presence: true
  validates :last_4_ssn, length: { is: 4 }, presence: true
  validates :street1, :city, length: { maximum: 255 }, presence: true
  validates :street2, length: { maximum: 255 }
  validates :state_code, inclusion: Mappings::States.codes
  validates :zipcode, length: { is: 5 }
  validates :vehicle_year, presence: true
  validates :vehicle_make_name, :vehicle_make_id, presence: true
  validates :vehicle_model_name, :vehicle_model_id, presence: true
  validates :vehicle_vin, length: { maximum: 100 }
  validates :vehicle_type, inclusion: Mappings::VehicleTypes.types
  validates :desired_term, inclusion: DESIRED_TERMS
  validates :lien_name, length: { maximum: 50 }, presence: true
  validates :lien_rate, numericality: { greater_than: -1 }
  validates :lien_payment, :lien_payoff, money: true
  validates :job_name, :job_title, length: { maximum: 100 }, presence: true
  validates :job_years, numericality: { greater_than: -1 }
  validates :job_months, numericality: { greater_than: -1, less_than: 12 }
  validates :job_wages, money: true

  # Check if lead is synced
  #
  # @return [Boolean]
  def synced?
    synced_at.present?
  end
end
