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

  def step2
    lead = Lead.find_by_token(params[:id])
    response = Leads::Update.call(lead, lead_params, exporter: :step2)
    respond_with_lead(response)
  end

  def step3
    lead = Lead.find_by_token(params[:id])
    response = Leads::Update.call(lead, lead_params, exporter: :step3)
    if response.success?
      approval = Leads::Preapproval.call(lead)
      respond_with_lead(approval)
    else
      respond_with_lead(response)
    end
  end

  private

  def respond_with_lead(response)
    if response.success?
      render json: { lead: response.lead }
    else
      render json: { errors: response.errors },
        status: :unprocessable_entity
    end
  end

  def lead_params
    params.require(:lead).permit(
      :landing_id,
      :affiliate_id,
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
      :mortgage_broker,
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
