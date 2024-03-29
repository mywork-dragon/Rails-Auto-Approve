# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_19_204118) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attachments", force: :cascade do |t|
    t.string "picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "teaser", null: false
    t.string "cover"
    t.integer "state", default: 0, null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_categories_on_slug", unique: true
    t.index ["state"], name: "index_categories_on_state"
  end

  create_table "category_posts", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_category_posts_on_category_id"
    t.index ["post_id", "category_id"], name: "index_category_posts_on_post_id_and_category_id", unique: true
  end

  create_table "faqs", force: :cascade do |t|
    t.text "question", null: false
    t.text "answer", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "landings", force: :cascade do |t|
    t.string "theme", null: false
    t.string "path", null: false
    t.jsonb "config", default: {}, null: false
    t.integer "state", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "source", default: "", null: false
    t.string "logo"
    t.string "background"
    t.index ["path"], name: "index_landings_on_path", unique: true
    t.index ["source"], name: "index_landings_on_source"
    t.index ["state", "path"], name: "index_landings_on_state_and_path"
  end

  create_table "leads", force: :cascade do |t|
    t.bigint "landing_id", null: false
    t.string "source"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email"
    t.string "phone"
    t.string "last_4_ssn"
    t.date "date_of_birth"
    t.string "street1"
    t.string "street2"
    t.string "city"
    t.string "state_code"
    t.string "zipcode"
    t.integer "estimated_credit_score"
    t.string "job_name"
    t.string "job_title"
    t.integer "job_wages_cents"
    t.integer "job_years"
    t.integer "job_months"
    t.integer "vehicle_year"
    t.integer "vehicle_mileage"
    t.string "vehicle_type"
    t.string "vehicle_vin"
    t.integer "desired_term"
    t.string "lien_name"
    t.integer "lien_payoff_cents"
    t.integer "lien_payment_cents"
    t.float "lien_rate"
    t.integer "state", default: 0, null: false
    t.string "crm_id"
    t.integer "synced_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "vehicle_make_id"
    t.string "vehicle_make_name"
    t.integer "vehicle_model_id"
    t.string "vehicle_model_name"
    t.text "tracking_urls", default: [], null: false, array: true
    t.string "token"
    t.string "affiliate_id"
    t.jsonb "additional", default: {}, null: false
    t.index ["crm_id"], name: "index_leads_on_crm_id"
    t.index ["landing_id", "state"], name: "index_leads_on_landing_id_and_state"
    t.index ["state"], name: "index_leads_on_state"
    t.index ["synced_at"], name: "index_leads_on_synced_at"
    t.index ["token"], name: "index_leads_on_token", unique: true
  end

  create_table "positions", force: :cascade do |t|
    t.string "title", null: false
    t.text "content", null: false
    t.string "location", null: false
    t.string "url"
    t.string "email"
    t.integer "state", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state"], name: "index_positions_on_state"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title", null: false
    t.string "cover"
    t.string "teaser"
    t.text "content"
    t.datetime "publish_at"
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["publish_at", "slug"], name: "index_posts_on_publish_at_and_slug"
    t.index ["slug"], name: "index_posts_on_slug", unique: true
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "resource_categories", force: :cascade do |t|
    t.string "name", null: false
    t.integer "state", default: 0, null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_resource_categories_on_slug", unique: true
    t.index ["state"], name: "index_resource_categories_on_state"
  end

  create_table "resources", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "resource_category_id", null: false
    t.string "title", null: false
    t.string "subTitle", null: false
    t.string "cover"
    t.text "content"
    t.string "slug", null: false
    t.integer "state", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resource_category_id"], name: "index_resources_on_resource_category_id"
    t.index ["slug"], name: "index_resources_on_slug", unique: true
    t.index ["state"], name: "index_resources_on_state"
    t.index ["user_id"], name: "index_resources_on_user_id"
  end

  create_table "review_sites", force: :cascade do |t|
    t.string "name", null: false
    t.string "logo", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "review_site_id", null: false
    t.string "name", null: false
    t.text "content", null: false
    t.string "url", null: false
    t.integer "rating", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["review_site_id"], name: "index_reviews_on_review_site_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "role", default: 0, null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["role"], name: "index_users_on_role"
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "make", null: false
    t.string "model", null: false
    t.integer "state", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["make", "model"], name: "index_vehicles_on_make_and_model", unique: true
  end

  add_foreign_key "category_posts", "categories"
  add_foreign_key "category_posts", "posts"
  add_foreign_key "leads", "landings"
  add_foreign_key "posts", "users"
  add_foreign_key "resources", "resource_categories"
  add_foreign_key "resources", "users"
  add_foreign_key "reviews", "review_sites"
end
