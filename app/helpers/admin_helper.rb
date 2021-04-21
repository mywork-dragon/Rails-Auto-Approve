module AdminHelper
  def sidebar_link(path, title, icon_file)
    content_tag(:div, class: "admin-side-item #{'admin-side-active' if path.include? params[:controller]}") do
      concat image_pack_tag icon_file, class: "mr-6"
      concat link_to title, path, class: 'text-white'
    end
  end
end
