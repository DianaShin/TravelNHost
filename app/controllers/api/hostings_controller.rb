class Api::HostingsController < ApplicationController
  def create
    @hosting = Hosting.new(hosting_params)
      if @hosting.save
        render :show
      else
        render json: @hosting.errors.full_messages, status: 404
      end
  end

  def index
    if current_user.id == hosting_params[:host_id].to_i
      @hostings = Hosting.where('hostings.host_id = ?', hosting_params[:host_id])
    else
      @hostings = []
    end
  end
  ### in User model instead write a method for getting all of my guests and another
  ### all of my upcoming travels

  def show
    @hosting = Hosting.find_by(id: params[:id])
    if @hosting
      render :show
    else
      render json: ['Hosting not found'], status: 404
    end
  end

  private
  def hosting_params
    params.require(:hosting).
    permit(:host_id, :guest_id, :destination_id, :start_date, :end_date)
  end
end
