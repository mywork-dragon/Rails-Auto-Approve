class Admin::ReviewsController < AdminController
  def index
    @reviews = Review.page(params[:page])
  end

  def show
    @review = Review.find(params[:id])
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      flash[:notice] = 'Review created successfully'
      redirect_to admin_review_path(@review)
    else
      render action: :new
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      flash[:notice] = 'Review updated successfully'
      redirect_to admin_review_path(@review)
    else
      render action: :edit
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to admin_reviews_path
  end

  private

  def review_params
    params.require(:review).permit(
      :title, :content, :location, :url, :email, :state
    )
  end
end
