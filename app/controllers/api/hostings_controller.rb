class Api::HostingsController < ApplicationController
  def create
    @hosting = Hosting.new(hosting_params)
      if @hosting.save
        render :show
      else
        render json: @hosting.errors.full_messages, status: 404
      end
  end

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
