class LeadsController < ApplicationController
  def create
    response = Leads::Create.call(lead_params)
    if response.success?
      render json: { lead: response.lead },
        status: :created
    else
      render json: { errors: response.errors },
        status: :unprocessable_entity
    end
  end

  private

  def lead_params
    params.require(:lead).permit(
      :landing_id,
      :source,
      :first_name,
      :last_name,
      :email,
      :phone,
      :last_4_ssn,
      :date_of_birth,
      :street1,
      :street2,
      :city,
      :state_code,
      :zipcode,
      :estimated_credit_score,
      :job_name,
      :job_title,
      :job_wages,
      :job_years,
      :job_months,
      :lien_payment,
      :lien_payoff,
      :lien_rate,
      :vehicle_year,
      :vehicle_mileage,
      :vehicle_type,
      :vehicle_vin,
      :vehicle_make_id,
      :vehicle_make_name,
      :vehicle_model_id,
      :vehicle_model_name,
      :desired_term,
      :lien_name,
      :lien_payoff_cents,
      :lien_payment_cents,
      :lien_rate,
      :desired_term,
      tracking_urls: []
    )
  end
end
