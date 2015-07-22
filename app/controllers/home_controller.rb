class HomeController < ApplicationController
  def index
  end

  def create
  	params[:myFile].each do |index, file|
	  	uploader = ImageUploader.new
			uploader.store!(file)
		end
  end
end
