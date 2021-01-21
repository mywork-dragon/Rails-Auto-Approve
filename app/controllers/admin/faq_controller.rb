class Admin::FaqController < AdminController
  def index
    @positions = Faq.page(params[:page])
  end

  def show
    @faq = Faq.find(params[:id])
  end

  def new
    @faq = Faq.new
  end

  def create
    @faq = Faq.new(position_params)
    if @faq.save
      flash[:notice] = 'Faq created successfully'
      redirect_to admin_position_path(@faq)
    else
      render action: :new
    end
  end

  def edit
    @faq = Faq.find(params[:id])
  end

  def update
    @faq = Faq.find(params[:id])
    if @faq.update(position_params)
      flash[:notice] = 'Faq updated successfully'
      redirect_to admin_position_path(@faq)
    else
      render action: :edit
    end
  end

  def destroy
    @faq = Faq.find(params[:id])
    @faq.destroy
    redirect_to admin_positions_path
  end

  private

  def position_params
    params.require(:faq).permit(:question, :answer)
  end
end
