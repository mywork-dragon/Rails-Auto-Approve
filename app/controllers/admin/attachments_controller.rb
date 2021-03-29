class Admin::AttachmentsController < AdminController

    skip_before_action :verify_authenticity_token
    def uploadImages
        @attachment = Attachment.new
        @attachment.picture = params[:file]
        @attachment.save


        respond_to do |format|
            format.json { render :json => { status: 'OK', link: @attachment.picture.url}}
        end 
    end
    
end
    