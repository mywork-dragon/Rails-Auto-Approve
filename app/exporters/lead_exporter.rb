class LeadExporter
  # Initialize the exporter
  #
  # @param lead [Lead]
  def initialize(lead)
    @lead = lead
  end

  def step1
    {
      source: @lead.source || @lead.landing.source,
      landingPageUrls: @lead.tracking_urls,
      primaryBorrower: {
        firstName: @lead.first_name,
        lastName: @lead.last_name,
        email: @lead.email,
        homePhone: @lead.phone,
      },
      creditInformation: {
        primaryBorrower: {
          estimatedCreditScore: @lead.estimated_credit_score
        }
      }
    }
  end

  def step2
    {
      primaryBorrower: {
        ssn: @lead.last_4_ssn,
        dateOfBirth: @lead.date_of_birth.try(:iso8601),
        firstName: @lead.first_name,
        lastName: @lead.last_name,
        email: @lead.email,
        homePhone: @lead.phone,
        address: {
          street1: @lead.street1,
          street2: @lead.street2,
          city: @lead.city,
          state: {
            id: @lead.state_code,
            name: Mappings::States::MAPPING[@lead.state_code.to_sym]
          },
          zip: @lead.zipcode
        }
      }
    }
  end

  def step3
    {
      vehicles: [
        {
          vehicleType: Mappings::VehicleTypes::MAPPING[@lead.vehicle_type],
          make: {
            nadaId: @lead.vehicle_make_id,
            name: @lead.vehicle_make_name,
          },
          model: {
            nadaId: @lead.vehicle_model_id,
            name: @lead.vehicle_model_name
          },
          year: {
            nadaId: @lead.vehicle_year.to_s,
            name: @lead.vehicle_year.to_s
          },
          mileage: @lead.vehicle_mileage,
          vin: @lead.vehicle_vin,
          requestedLoanTermsInMonths: @lead.desired_term,
          previousLienholder: {
            name: @lead.lien_name,
            payoffAmount: @lead.lien_payoff.to_f,
            currentPayment: @lead.lien_payment.to_f,
            currentRate: @lead.lien_rate
          }
        }
      ]
    }
  end

  # Export the lead
  #
  # @return [Hash]
  def export
    {
      source: @lead.source || @lead.landing.source,
      landingPageUrls: @lead.tracking_urls,
      primaryBorrower: {
        firstName: @lead.first_name,
        lastName: @lead.last_name,
        email: @lead.email,
        ssn: @lead.last_4_ssn,
        homePhone: @lead.phone,
        dateOfBirth: @lead.date_of_birth.try(:iso8601),
        address: {
          street1: @lead.street1,
          street2: @lead.street2,
          city: @lead.city,
          state: {
            id: @lead.state_code,
            name: Mappings::States::MAPPING[@lead.state_code.to_sym]
          },
          zip: @lead.zipcode
        },
        employer: {
          name: @lead.job_name,
          jobTitle: @lead.job_title,
          monthlyWages: @lead.job_wages.to_f,
          years: @lead.job_years,
          months: @lead.job_months
        }
      },
      vehicles: [
        {
          vehicleType: Mappings::VehicleTypes::MAPPING[@lead.vehicle_type],
          make: {
            nadaId: @lead.vehicle_make_id,
            name: @lead.vehicle_make_name,
          },
          model: {
            nadaId: @lead.vehicle_model_id,
            name: @lead.vehicle_model_name
          },
          year: {
            nadaId: @lead.vehicle_year.to_s,
            name: @lead.vehicle_year.to_s
          },
          mileage: @lead.vehicle_mileage,
          vin: @lead.vehicle_vin,
          requestedLoanTermsInMonths: @lead.desired_term,
          previousLienholder: {
            name: @lead.lien_name,
            payoffAmount: @lead.lien_payoff.to_f,
            currentPayment: @lead.lien_payment.to_f,
            currentRate: @lead.lien_rate
          }
        }
      ],
      creditInformation: {
        primaryBorrower: {
          estimatedCreditScore: @lead.estimated_credit_score
        }
      }
    }
  end
end