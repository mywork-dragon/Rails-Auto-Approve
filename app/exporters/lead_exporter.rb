class LeadExporter
  # Initialize the exporter
  #
  # @param lead [Lead]
  def initialize(lead)
    @lead = lead
  end

  # Export the lead
  #
  # @return [Hash]
  def export
    {
      source: @lead.source,
      primaryBorrower: {
        firstName: @lead.first_name,
        lastName: @lead.last_name,
        email: @lead.email,
        homePhone: @lead.phone,
        dateOfBirth: @lead.date_of_birth,
        address: {
          street1: @lead.street1,
          street2: @lead.street2,
          city: @lead.city,
          state: @lead.state_code,
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
          vehicleType: @lead.vehicle_type,
          make: { name: @lead.vehicle.make },
          model: { name: @lead.vehicle.model },
          year: { name: @lead.vehicle_year.to_s },
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