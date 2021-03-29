class Attachment < ApplicationRecord
    mount_uploader :picture, PictureUploader
end
