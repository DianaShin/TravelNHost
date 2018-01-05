class Api::DestinationsController < ApplicationController

  def index
    @destinations = Destination.all
    render :index
  end

  def show
    @destination = Destination.find_by(id: params[:id])
    if @destination
      render :show
    else
      render json: ['Destination not found'], status: 404
    end
  end

  def create
    @destination = Destination.new(destination_params)
      if @destination.save
        render :show
      else
        render json: @destination.errors.full_messages, status: 404
      end
  end

  private
  def destination_params
    params.require(:destination).permit(:name, :country, :lat, :long)
  end
end
